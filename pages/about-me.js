import Layout from '../components/Layout';
import styles from '../styles/AboutMe.module.css';
import { whatAmI, whoAmI } from '../lib/images';

export default function AboutMe() {
  return (
    <Layout>
      <h1>About Me</h1>

      <div className={styles.container}>
        <h2>Who Am I?</h2>
        <p>
          Ahh. Ahh. Lorraine, have you ever, uh, been in a situation where you know you had to act a certain way but when you got there, you didn't know if you could go through with it? I'll get it back to you, alright? I hope so. Yeah, he's right here.
          <br /><br />
          Well, they're bigger than me. Where the hell are they. Weight has nothing to do with it. Excuse me. Oh.
        </p>

        <img src={whoAmI} />

        <h2>What Am I?</h2>
        <p>
          Uh, plutonium, wait a minute, are you telling me that this sucker's nuclear? Well, aren't you going up to the lake tonight, you've been planning it for two weeks. The only way we're gonna get those two to successfully meet is if they're alone together. So you've got to get your father and mother to interact at some sort of social- You do? I'd like you to meet my good friend George McFly.
          <br /><br />
          George: you ever think of running for class president? Aw yeah, everything is great. Good evening, I'm Doctor Emmett Brown. I'm standing on the parking lot of Twin Pines Mall. It's Saturday morning, October 26, 1985, 1:18 a.m. and this is temporal experiment number one. C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get down, that's it. That's George McFly? Dammit, Doc, why did you have to tear up that letter? If only I had more time. Wait a minute, I got all the time I want I got a time machine, I'll just go back and warn him. 10 minutes oughta do it. Time-circuits on, flux-capacitor fluxing, engine running, alright. No, no no no no, c'mon c'mon. C'mon c'mon, here we go, this time. Please, please, c'mon.
          <br /><br />
          Take care. Hey Marty, I'm not your answering service, but you're outside pouting about the car, Jennifer Parker called you twice. I know, and all I could say is I'm sorry. Oh, uh, hey you, get your damn hands off her. Do you really think I oughta swear? About how far ahead are you going?
        </p>

        <img src={whatAmI} />
      </div>
    </Layout>
  )
}
