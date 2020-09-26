const appRoot = document.querySelector("#application-root");

const App = (props) => {
  return (
    <div id="container">
      <header>
        <div id="image">
          <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg"></img>
        </div>
        <h1 className="title"></h1>
      </header>
      <main>
        <section id="introduction">
          <p>
            Hi I'm {props.name} I'm 25 and below this line you'll find more information
            about me.
          </p>
        </section>
        <br/>
        <section id="Education">
          <hr/>
          <p>I have studied at:</p>
          <ul>
              <li>IES BEZMILIANA</li>
              <li>AND</li>
              <li>Minnesota University</li>
          </ul>
          <hr/>
        </section>
        <br /> 
        <section id="works">
          <p>I have worked at:</p>
          <div id="works_list">
            <ul>
              <li>
                Github as Engineer during 2018 and there I have to Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </li>
              <li>
                Jetbrains as Project manager during 2019 and I'm still working
                there. My work consist in A assumenda autem dolorem doloremque
              </li>
            </ul>
        </div>
        </section>
        <section id="Contact-section">
        <p>My contact information:</p>
        <address id="Contact-info">
          <p>My name is Sally</p>
          <p>
            My email is:
            <a href="mailto://sally@IntenetExplorer.old"
              >sally@IntenetExplorer.old</a
            >
          </p>
          <p>
            My phone number is: <a href="tel:+34100572415">+34 100 57 24 15</a>
          </p>
        </address>
      </section>
      </main>
    </div>
  );
};


ReactDOM.render(<App name="George"/>, appRoot);