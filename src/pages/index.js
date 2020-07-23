import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        This is the diary of Bilbo Baggins, the Hobbit from the Shire. This
        includes the epic adventures of the brave Hobbit throughout the length
        and breadth of the Middle Earth. Written and updated exclusively by
        Bilbo himself on a weekly basis.
      </h1>
      <h3 style={{ color: "#808080" }}>
        A word of caution for the readers: Do not seek these adventures yourself
        as these might lead to paths of peril and dungeons of doom. Beware that
        the middle earth is filled with dark secrets which can destroy the most
        noble of beings.
      </h3>
    </Layout>
  )
}

export default Home
