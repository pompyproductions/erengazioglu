import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Card title="Thanks for stopping by!">
        <p>I'm Eren Gazioglu, a web/software developer with a background in architecture.</p>
        <p>If you're interested, you can find the source code for this website by following <a href="https://github.com/pompyproductions/erengazioglu" target="_blank">this link</a> <i>(opens a new tab/window).</i></p>
      </Card>
      <div className="content">
        <p>If you don't want to wait until the next update to see more, you can:</p>
        <nav>
          <ul>
            <li>find my projects in <a href="https://github.com/pompyproductions">my GitHub profile,</a></li>
            <li>check out <a href="https://codepen.io/pompyproductions" target="_blank">my CodePen</a>,</li>
            <li>or <Link to="/contact">get in touch with me</Link> directly!</li>
          </ul>
        </nav>
      </div>
    </main>
  )
}

export default Home;