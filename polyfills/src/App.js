import { useState } from "react";
import useCustomEffect from "./hooks/use-custom-effect";
import useCustomMemo from "./hooks/use-custom-memo";
import useCustomCallback from "./hooks/use-custom-callback";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [hello, setHello] = useState();

  const cache = useCustomMemo(() => {
    console.log("called");
    return 1;
  }, []);

  useCustomEffect(() => {
    console.log(count);
    console.log(text);
    console.log(cache);
  }, [text, hello]);

  const func = useCustomCallback(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="App">
      <button
        onClick={() => {
          console.log(func);
          func();
        }}
      >
        Call
      </button>
      <input type="checkbox" onChange={(e) => setHello(!e.target.checked)} />
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click</button>

      <div className="max-w-7xl mx-auto mt-20">
        <img
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
          className="float-left h-28 w-52 rounded-md"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
          className="float-end h-48 w-52 rounded-md"
          alt=""
        />
        <div className="clear-left">
          Maybe we can live without libraries, people like you and me. Maybe.
          Sure, we're too old to change the world, but what about that kid,
          sitting down, opening a book, right now, in a branch at the local
          library and finding drawings of pee-pees and wee-wees on the Cat in
          the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          Look. If you think this is about overdue fines and missing books,
          you'd better think again. This is about that kid's right to read a
          book without getting his mind warped! Or: maybe that turns you on,
          Seinfeld; maybe that's how y'get your kicks. You and your good-time
          buddies. Maybe we can live without libraries, people like you and me.
          Maybe. Sure, we're too old to change the world, but what about that
          kid, sitting down, opening a book, right now, in a branch at the local
          library and finding drawings of pee-pees and wee-wees on the Cat in
          the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          Look. If you think this is about overdue fines and missing books,
          you'd better think again. This is about that kid's right to read a
          book without getting his mind warped! Or: maybe that turns you on,
          Seinfeld; maybe that's how y'get your kicks. You and your good-time
          buddies. Maybe we can live without libraries, people like you and me.
          Maybe. Sure, we're too old to change the world, but what about that
          kid, sitting down, opening a book, right now, in a branch at the local
          library and finding drawings of pee-pees and wee-wees on the Cat in
          the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          Look. If you think this is about overdue fines and missing books,
          you'd better think again. This is about that kid's right to read a
          book without getting his mind warped! Or: maybe that turns you on,
          Seinfeld; maybe that's how y'get your kicks. You and your good-time
          buddies. Maybe we can live without libraries, people like you and me.
          Maybe. Sure, we're too old to change the world, but what about that
          kid, sitting down, opening a book, right now, in a branch at the local
          library and finding drawings of pee-pees and wee-wees on the Cat in
          the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          Look. If you think this is about overdue fines and missing books,
          you'd better think again. This is about that kid's right to read a
          book without getting his mind warped! Or: maybe that turns you on,
          Seinfeld; maybe that's how y'get your kicks. You and your good-time
          buddies.
        </div>
      </div>
      <div className="w-32 overflow-hidden text-nowrap text-ellipsis">
        Seinfeld; maybe that's how y'get your kicks. You and your good-time
        buddies. Maybe we can live without libraries, people like you and me.
        Maybe. Sure, we're too old to change the world, but what about that kid,
        sitting down, opening a book, right now, in a branch at the local
        library and finding drawings of pee-pees and wee-wees on the Cat in the
        Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If
        you think this is about overdue fines and missing books, you'd better
        think again. This is about that kid's right to read a book without
        getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe
        that's how y'get your kicks. You and your good-time buddies.
      </div>
      <div className="max-w-xs text-pretty">
        This is about that kid's right to read a book wi that kid's right to
        read a book wi that kid's right to read a book withat kid's right to
        read a book wi that kid's right to read a book wi that kid's right to
        read a book wi that kid's right to read a book without getting his mind
        warped{" "}
      </div>
      <div className="indent-24 whitespace-pre-line">
        Look. If you think this is about overdue Look. If you think this is
        about overdue fines and missing books, you'd better think again. This is
        about that kid's right to read a book without getting his mind warped!
        Or: maybe that turns you on, Seinfeld; maybe that's how y'get your
        kicks. You and your good-time buddies.
      </div>
    </div>
  );
}

export default App;
