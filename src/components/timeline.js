import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const HOME_TIMELINE_QUERY = gql`
  query twitterTimeline {
    twitter {
      homeTimeline(first: 10) {
        tweets {
          createdAt
          id
          favoriteCount
          retweetCount
          source
          text
          user {
            name
            screenName
            profileImageUrl
          }
        }
      }
    }
  }
`
const Timeline = () => {
  const { loading, error, data } = useQuery(HOME_TIMELINE_QUERY, {
    pollInterval: 2000
  })
  if (loading) return <p>Loading ...</p>
  if (error)
    return (
      <p>
        Error <pre>{JSON.stringify(error, null, 2)}</pre>
      </p>
    )
  return (
    <div>
      {data.twitter.homeTimeline.tweets.map(tweet => (
        <div
          className="p-10 border border-gray-400 bg-white shadow"
          key={tweet.id}
        >
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={tweet.user.profileImageUrl}
              alt={tweet.user.name}
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{tweet.user.name}</p>
              <p className="text-gray-600">@{tweet.user.screenName}</p>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: tweet.text }} />
        </div>
      ))}
    </div>
  )
}

export default Timeline
