import React from "react";
import Card from "../components/Card"

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
            <li><a href="https://github.com/pompyproductions">find my projects in my GitHub profile,</a></li>
            <li>check out my <a href="https://codepen.io/pompyproductions" target="_blank">CodePen,</a></li>
            <li><a href="mailto:hello@erengazioglu.com?subject=Let\'s get in touch">reach out</a> with an email</li>
          </ul>
        </nav>
      </div>
    </main>
  )
}

export default Home;