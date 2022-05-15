import { useState } from "react";
import Button from "./components/Button";
import styled from "styled-components";
function App() {
  return (
    <Wrapper>
      <h2 className="title">buttons</h2>
      <div className="btn-container">
        <div>
          <pre className="btn-tag">&lt;Button /&gt;</pre>
          <Button />
        </div>
        <div>
          <pre className="btn-tag">&#38;:hover, &#38;:focus</pre>
          <Button onHover />
        </div>
      </div>
      <div className="btn-container">
        <div>
          <pre className="btn-tag">&lt;Button variant="outline" /&gt;</pre>
          <Button variant="outline" />
        </div>
        <div>
          <pre className="btn-tag">&#38;:hover, &#38;:focus</pre>
          <Button variant="outline" onHover />
        </div>
      </div>
      <div className="btn-container">
        <div>
          <pre className="btn-tag">&lt;Button variant="text" /&gt;</pre>
          <Button variant="text" />
        </div>
        <div>
          <pre className="btn-tag">&#38;:hover, &#38;:focus</pre>
          <Button variant="text" onHover />
        </div>
      </div>
      <div className="btn-container">
        <div>
          <pre className="btn-tag">&lt;Button disableShadow /&gt;</pre>
          <Button disableShadow />
        </div>
      </div>
      <div className="btn-container">
        <div>
          <pre className="btn-tag">&lt;Button disabled /&gt;</pre>
          <Button disabled />
        </div>
        <div>
          <pre className="btn-tag">
            &lt;Button variant="text" disabled /&gt;
          </pre>
          <Button disabled variant="text" />
        </div>
      </div>
      <div className="btn-container">
        <div>
          <pre className="btn-tag">
            &lt;Button startIcon="local_grocery_store" /&gt;
          </pre>
          <Button startIcon="local_grocery_store" />
        </div>
        <div>
          <pre className="btn-tag">
            &lt;Button endIcon="local_grocery_store" /&gt;
          </pre>
          <Button endIcon="start" />
        </div>
      </div>
      <div className="btn-container">
        <div>
          <pre className="btn-tag">&lt;Button size="sm" /&gt;</pre>
          <Button size="sm" />
        </div>
        <div>
          <pre className="btn-tag">&lt;Button size="md" /&gt;</pre>
          <Button size="md" />
        </div>
        <div>
          <pre className="btn-tag">&lt;Button size="lg" /&gt;</pre>
          <Button size="lg" />
        </div>
      </div>
      <div className="btn-container">
        <div>
          <pre className="btn-tag">&lt;Button color="default" /&gt;</pre>
          <Button color="default" />
        </div>
        <div>
          <pre className="btn-tag">&lt;Button color="primary" /&gt;</pre>
          <Button color="primary" />
        </div>
        <div>
          <pre className="btn-tag">&lt;Button color="secondary" /&gt;</pre>
          <Button color="secondary" />
        </div>
        <div>
          <pre className="btn-tag">&lt;Button color="danger" /&gt;</pre>
          <Button color="danger" />
        </div>
      </div>
      <div className="btn-container">
        <div>
          <pre className="btn-tag">&lt;Button color="default" /&gt;</pre>
          <Button color="default" onHover />
        </div>
        <div>
          <pre className="btn-tag">&lt;Button color="primary" /&gt;</pre>
          <Button color="primary" onHover />
        </div>
        <div>
          <pre className="btn-tag">&lt;Button color="secondary" /&gt;</pre>
          <Button color="secondary" onHover />
        </div>
        <div>
          <pre className="btn-tag">&lt;Button color="danger" /&gt;</pre>
          <Button color="danger" onHover />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  gap: 45px;
  padding: 2rem 4rem;
  .title {
    line-height: 36px;
    color: #4f4f4f;
    font-weight: 500;
    margin-bottom: 28px;
  }
  .btn-tag {
    margin-bottom: 0.8rem;
    font-family: "Ubuntu Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #333333;
  }
  .btn-container {
    display: grid;
    grid-template-columns: repeat(4, 155px);
    grid-template-rows: auto;
    gap: 155px;
  }
`;

export default App;
