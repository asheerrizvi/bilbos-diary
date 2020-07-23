import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h2>About Bilbo</h2>
      <h3 style={{ color: "#808080" }}>
        Bilbo Baggins was a hobbit of the Shire, the main protagonist of The
        Hobbit and a secondary character in The Lord of the Rings. Gandalf
        suggested to Thorin and Company that they hire Bilbo Baggins to be their
        burglar in the Quest of Erebor, and later fought in the Battle of Five
        Armies. Bilbo was also one of the bearers of the One Ring, and the first
        to voluntarily give it up, although with some difficulty. He wrote many
        of his adventures in a book he called There and Back Again. Bilbo
        adopted his second-cousin-once-removed Frodo Baggins to be his heir
        after his parents, Drogo Baggins and Primula Brandybuck, drowned in the
        Brandywine River. Bilbo was the first hobbit to become famous in the
        world at large and was one of the few to set foot in the Undying Lands
        across the ocean.
      </h3>
      <h2>About Hobbits</h2>
      <h3 style={{ color: "#808080" }}>
        Hobbits, also known as Halflings, were an ancient mortal race that lived
        in Middle-earth. Although their exact origins are unknown, they were
        initially found in the northern regions of Middle-earth and below the
        Vales of Anduin. At the beginning of the Third Age, hobbits moved north
        and west. Most of their race eventually founded the land of the Shire in
        about the year TA 1601, though one type of hobbit known as Stoors
        remained in the Anduin Vale (the type of hobbit Sméagol was).
      </h3>
    </Layout>
  )
}

export default About
