// import componentsImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data-js-eamplex";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TapButton from "./components/TapButton";
import { useState } from "react";

function App() {
  // let tabContent = "Please click a button";
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    //  selectedButton => "components" , "jsx ", "props" , "state".

    // tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }
  // console.log("app");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton onSelect={() => handleSelect("components")}>
              Components
            </TapButton>
            <TapButton onSelect={() => handleSelect("jsx")}>JSX</TapButton>
            <TapButton onSelect={() => handleSelect("props")}>Props</TapButton>
            <TapButton onSelect={() => handleSelect("state")}>State</TapButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
