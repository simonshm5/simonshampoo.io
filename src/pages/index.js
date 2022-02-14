import React, { useEffect, useState } from "react";
import "./index.css";
import "98.css";
import Draggable from "react-draggable"; // The default

const IndexPage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.backgroundImage =
      "url('https://c.tenor.com/g0c8NmbCTa8AAAAd/pokemon-dragonite.gif')";
    document.body.style.backgroundSize = "cover";
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <title>simonshampoo</title>
      {visible && (
        <Draggable>
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">simon_diagnostics-x86.exe (drag me!)</div>
              <div className="title-bar-controls">
                <button aria-label="Close" onClick={() => setVisible(false)} />
              </div>
            </div>
            <div
              className="window-body"
              style={{ fontSize: "large", textAlign: "center", margin: 30 }}
            >
              <b>
               <a href="https://www.twitter.com/0xshampoo_">twitter,</a>
                &nbsp;
                <a href="https://www.github.com/simonshm5">github,</a>
                &nbsp;
                <a href="mailto:simonshm5@gmail.com">email</a>
              </b>
              <br />
              <br />
              junior at ASU studying computer science.
              <br />
              software engineer generalist w/ focus on full-stack web3.
              <h4>my experience:</h4>
              <ul className="tree-view">
                <li>Incoming SWE intern @ Capital One</li>
                <li>SWE intern @ CampusLogic</li>
                <li>Equities Trader intern @ Edward Jones</li>
              </ul>
              <h4>things I enjoy:</h4>
              <ul className="tree-view">
                <li>web3, defi, NFTs, etc.</li>
                <li>iced coffee</li>
                <li>the vibes fr</li>
                <li>my dog booboo :)</li>
              </ul>
              <h4>things I'm currently learning:</h4>
              <ul className="tree-view">
                <li>TypeScript, Rust, Solidity, Hardhat, etc.</li>
                <li>the EVM, smart contracts, defi development</li>
                <li>trading</li>
                <li>contributing to open source/DAOs</li>
              </ul>
              <h4>things I want to learn in the future:</h4>
              <ul className="tree-view">
                <li>MEV</li>
                <li>l2s, zkps, scaling</li>
                <li>linux, shell, hacking</li>
              </ul>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default IndexPage;
