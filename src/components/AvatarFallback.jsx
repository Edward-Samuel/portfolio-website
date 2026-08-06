import { useState } from 'react'
import { profile } from '../data.js'

export default function AvatarFallback() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="avatar__inner">
      <img
        src={profile.photo}
        alt={`${profile.firstName} ${profile.lastName}`}
        className={`avatar__img ${loaded ? 'avatar__img--loaded' : ''}`}
        loading="eager"
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
      <div className={`avatar__fallback ${loaded ? '' : 'avatar__fallback--visible'}`} aria-hidden="true">
        <span className="avatar__initials">{profile.initials}</span>
      </div>
    </div>
  )
}

export function AvatarSkeleton() {
  return (
    <div className="avatar__inner avatar__skeleton">
      <span className="avatar__initials">{profile.initials}</span>
    </div>
  )
}
