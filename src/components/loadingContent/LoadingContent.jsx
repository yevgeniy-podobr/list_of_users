import React from 'react'
import { Loader } from './loader'
import './loadingContent.scss'

export const LoadingContent = (props) => {
  if (props.isLoading) {
    return (
      <div className={`loading-content ${props.className ?? ''}`}>
        <Loader></Loader>
      </div>
    )
  }
  return <>{props.children}</>
}
