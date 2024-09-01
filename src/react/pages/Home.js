import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Card title="Hello! Thanks for stopping by.">
        <p>I'm Eren Gazioglu, a web/software developer with a background in architecture.</p>
        <p>If you're interested, you can find the source code for this website by following <a href="https://github.com/pompyproductions/erengazioglu" target="_blank">this link</a> <i>(opens a new tab/window).</i></p>
      </Card>
      <div className="content">
        <p>If you'd like to find out more about what I do, check out <Link to="/projects">my personal projects.</Link></p>
        <p>To get in touch with me, you can fill in the contact form over at the <Link to="/contact">"Contact"</Link> page.</p>
      </div>
    </main>
  )
}

export default Home;