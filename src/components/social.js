import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const addScript = url => {
  if (typeof document === 'undefined') {
    return
  }
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            instagram
            youtube {
              name
              id
            }
            facebook
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const social = data.site.siteMetadata?.social

  addScript("https://apis.google.com/js/platform.js")

  return (
    <div className="social">
      {!!social?.youtube?.id && (
        <div className="social__youtube">
          <div className="g-ytsubscribe" data-channelid={social.youtube.id} data-layout="full" />
        </div>
      )}
    </div>
  )
}

export default Social
